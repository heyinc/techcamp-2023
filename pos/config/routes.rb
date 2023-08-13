Rails.application.routes.draw do
  scope :api do
    resource :ping, only: :show
    resources :orders, only: [:index, :create]
  end
end
