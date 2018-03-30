require 'pathname'

cwd = Pathname.new(__FILE__).dirname
matcher = %r{<glyph glyph-name="([a-z0-9\-]+)" unicode="&#\d+;" d="([a-zA-Z0-9 \-]+)"/>}
destination = cwd.join('src', 'components', 'Icon', 'icons')

cwd
  .join('docs', 'src', 'fonts', 'ic-icons.svg')
  .read
  .split("\n")
  .map { |line| matcher.match(line) }
  .map { |match| [match[1], match[2]] }
  .map do |name, path|
    [
      destination.join("#{name.gsub(/-(\w)/) { $1.upcase }}.svg"),
      <<-SQL.strip
<svg viewBox="0 0 512 512" width="32" height="32">
  <path d="#{path}"/>
</svg>
SQL
    ]
  end
  .each do |filename, contents|
    File.write(filename, contents)
  end
