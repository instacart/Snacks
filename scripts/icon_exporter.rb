#! /usr/bin/env ruby
require 'pathname'
require 'nokogiri'

name = ARGV.first

unless name
  puts <<-HELP
INSTRUCTIONS
./icon_export_helper.rb ICON_NAME
When asked to copy the svg, open the Design System Sketch file, open the Symbols page (not the Icons page), right-click on the icon you want to export, and select "Copy SVG Code" and the script will take care of the rest.
  HELP
  exit
end

root = Pathname.new(__FILE__).dirname.join('..').expand_path
path = root.join('src', 'components', 'SVGIcon', 'icons', "#{name}.svg")
initial_copy = `pbpaste`
source = nil

if path.exist?
  puts "#{name} file already exists, overwrite? (y/n)"
  exit unless STDIN.gets.strip.downcase == 'y'
end

if initial_copy.strip.start_with?('<svg')
  puts "SVG already in clipboard, use it for #{name}? (y/n)"
  if STDIN.gets.strip.downcase == 'y'
    source = initial_copy
  end
end

unless source
  puts "Copy svg for #{name} please"
  loop do
    source = `pbpaste`
    if source != initial_copy && source.strip.start_with?('<svg')
      break
    end
    sleep 0.25
  end
end

document = Nokogiri::XML.parse(source)
svg = document.css('svg')
svg
  .set(:width, '24px')
  .set(:height, '24px')
  .set(:viewBox, '0 0 24 24')
svg = svg.first
element = document.css('path').first
element.attributes.each do |key, _|
  element.remove_attribute(key) unless key == 'd'
end
svg.content = ''
element.parent = svg
path.write("#{svg}\n")

puts "Done!"
