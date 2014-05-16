class PlaygroundsController < ApplicationController

  def index
    @playgrounds = PLAYGROUNDS
  end

  PLAYGROUNDS = {:prek => 'Pre-K', :junior => 'Junior'}

  PLAYGROUNDS.each do |key, value|
    define_method(key) do
      @title = value
      @playgrounds = PLAYGROUNDS
      @playground_name = key
      render key
    end

    view_filename = Rails.root.join("app", "views", "playgrounds", "#{key}.html.erb")
    unless File.exist?(view_filename)
      File.open view_filename, 'w' do |f|
        f.write "<h1>#{value}</h1>\n\n"
        f.write "<div>Make your playground by editting #{view_filename}</div>\n\n"
      end
    end

    js_filename = Rails.root.join("app", "assets", "javascripts", "#{key}.js")

    unless File.exist?(js_filename)
      File.open js_filename, 'w' do |f|
        f.write "/* Javascript for playground: #{value} */\n\n"
        f.write "$( document ).ready(function() {\n\n\n// Your Code Here\n\n\n});\n\n"
      end
    end
  end
end
