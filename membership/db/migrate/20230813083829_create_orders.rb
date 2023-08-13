class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.timestamps
    end

    create_table :order_items do |t|
      t.integer :order_id, null: false, unsigned: true
      t.integer :price, null: false, unsigned: true
      t.timestamps
    end

    add_index :order_items, [:order_id]
  end
end
