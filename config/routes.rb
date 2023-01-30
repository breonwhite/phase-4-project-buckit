Rails.application.routes.draw do
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index]
  resources :users, only: [:index, :show, :create]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
  
  # get 'items', to: 'items#index'
  # get '/items/:id', to: 'items#show'

end
