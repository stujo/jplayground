Rails.application.routes.draw do

  root 'playgrounds#index'

  PlaygroundsController::PLAYGROUNDS.each do |key, value|
    get '/' + key.to_s, to: 'playgrounds#' + key.to_s, as: key
  end
end
