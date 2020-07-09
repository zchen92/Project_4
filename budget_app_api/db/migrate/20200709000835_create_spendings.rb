class CreateSpendings < ActiveRecord::Migration[6.0]
  def change
    create_table :spendings do |t|
      t.string :activity
      t.integer :cost
      t.string :month

      t.timestamps
    end
  end
end
