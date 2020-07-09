class AddForeignKeyToSpendings < ActiveRecord::Migration[6.0]
  def change
    add_column :spendings, :user_id, :integer
  end
end
