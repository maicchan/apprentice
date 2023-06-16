Rails.application.routes.draw do
  get 'todos/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :todos, only: [:index, :new, :create, :edit, :update, :destroy]
  root 'todos#index'
  # Defines the root path route ("/")
  # root "articles#index"
end
