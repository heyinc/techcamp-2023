class PingsController < ApplicationController
  def show
    render json: JSON.generate("hello")
  end
end
