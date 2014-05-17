class PlaygroundsController < ApplicationController

  def index
    @playgrounds = PLAYGROUNDS
  end

  PLAYGROUNDS = {:prek => 'Pre-K',
                 :kindergarden => 'Kindergarden',
                 :junior => 'Junior',
                 :senior => 'Senior',
                 :undergraduate => 'Undergraduate'
  }

  PLAYGROUNDS.each do |key, value|
    define_method(key) do
      @title = value
      @playgrounds = PLAYGROUNDS
      @playground_name = key
      render "playgrounds/grounds/#{key}"
    end

    js_filename = Rails.root.join("app", "assets", "javascripts", "grounds", "#{key}.js")

    unless File.exist?(js_filename)
      File.open js_filename, 'w' do |f|
        f.write '"use strict;"'
        f.write "/* Javascript for playground: #{value} */\n\n"
        f.write "$( document ).ready(function() {\n\n\n// Your Code Here\n\n\n});\n\n"
      end
    end

    css_filename = Rails.root.join("app", "assets", "stylesheets", "grounds", "#{key}.css.scss")

    unless File.exist?(css_filename)
      File.open css_filename, 'w' do |f|
        f.write "\n\n/* CSS for playground: #{value} */\n\n"
      end
    end

    view_filename = Rails.root.join("app", "views", "playgrounds", "grounds", "#{key}.html.erb")
    unless File.exist?(view_filename)
      File.open view_filename, 'w' do |f|
        f.write "<h1>#{value}</h1>\n\n"
        f.write "<ul>\n"
        f.write "<li>Make your playground by editing #{view_filename}</li>\n\n"
        f.write "<li>Edit your javascript here #{js_filename}</li>\n\n"
        f.write "<li>Edit your CSS here #{css_filename}</li>\n\n"
        f.write "</ul>\n"
      end
    end

  end
end
