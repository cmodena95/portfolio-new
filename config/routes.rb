Rails.application.routes.draw do
  devise_for :users

  root to: "pages#home"

  get "dashboard", to: "pages#dashboard"
  get "home_test", to: "pages#home_test"

  resources :illustrations, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
