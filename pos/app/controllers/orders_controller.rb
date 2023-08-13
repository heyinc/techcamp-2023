class OrdersController < ApplicationController
  def create
    order = Order.new
    params[:items].each do |item|
      order.items.new(item.permit(:price))
    end
    order.save!
    render json: order.to_json
  end
end
