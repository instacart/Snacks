require 'pathname'
require 'nokogiri'

root = Pathname.new(__FILE__).dirname.expand_path
svg_dir = root.join('src', 'components', 'Icon', 'icons')
last_copy = nil
current_copy = nil
if `pbpaste`.strip.start_with?('<svg')
  puts 'svg already in clipboard, please copy something else first'
  exit
end

svg_dir.children.sort_by(&:to_s).each do |path|
  name = path.to_s[%r{/(\w+)\.svg$}, 1]
  if path.read.start_with?('<svg')
    puts "#{name} exists"
    next
  end
  puts "Copy svg for #{name} please"
  loop do
    current_copy = `pbpaste`
    if current_copy != last_copy && current_copy.strip.start_with?('<svg')
      last_copy = current_copy
      break
    end
    sleep 0.25
  end
  puts 'Thanks!'
  document = Nokogiri::XML.parse(current_copy)
  svg = document.css('svg')
  svg
    .set(:width, '24px')
    .set(:height, '24px')
    .set(:viewBox, '0 0 24 24')
  svg = svg.first
  element = document.css('path').first
  element.remove_attribute('id')
  svg.content = ''
  element.parent = svg
  path.write("#{svg}\n")
end
