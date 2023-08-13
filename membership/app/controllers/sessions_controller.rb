class SessionsController < ApplicationController
  def show
    user = User.find!(params[:email])
    render json: user.to_json
  end

  def create
    user = User.find_or_create_by!(email: params[:email])
    render json: user.to_json
  end
end
