class PlaygroundsController < ApplicationController

  def index
    @playgrounds = PLAYGROUNDS
  end

  PLAYGROUNDS = {:prek => 'Pre-K', :junior => 'Junior'}

  PLAYGROUNDS.each do |key, value|
    define_method(key) do
      @title = value
      @playgrounds = PLAYGROUNDS
      unless template_exists?(key)
        view_filename = Rails.root.join("app", "views", params[:controller], "#{key}.html.erb")
        File.open view_filename, 'w' do |f|
          f.write "<h1>#{value}</h1>\n\n"
          f.write "<div>Make your playground by editting #{view_filename}</div>\n\n"
        end
      end
      render key
    end
  end
end
