Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :favorites, only: [:create, :destroy, :index]
    resources :notes, except: [:new, :edit]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :notebooks, except: [:new, :edit]
    resources :photos, only: [:create, :index, :show]
  end

  root "static_pages#root"
end
