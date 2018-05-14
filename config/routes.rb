Rails.application.routes.draw do
  get 'notebooks/index'

  get 'notebooks/create'

  get 'notebooks/show'

  get 'notebooks/update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :notes, except: [:new, :edit]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
