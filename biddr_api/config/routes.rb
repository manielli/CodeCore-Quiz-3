Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:show, :index, :create, :destroy] do
          resources :bids, only: [:create, :destroy]
      end

      resources :session, only: [:create, :destroy]

      resources :users, only: [] do
        get :current, on: :collection
      end
    end
  end
end
