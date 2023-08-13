Rails.application.routes.draw do
  scope :api do
    resource :ping, only: :show

    resources :sessions, only: [:create, :index]
  end
end
