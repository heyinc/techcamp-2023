Rails.application.routes.draw do
  scope :api do
    resource :ping, only: :show
  end
end
