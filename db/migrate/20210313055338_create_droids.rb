class CreateDroids < ActiveRecord::Migration[6.1]
  def change
    create_table :droids do |t|
      t.string :name
			t.string :description
      t.float :price
      t.belongs_to :planet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
