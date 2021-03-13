class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :name
      t.string :company
			t.float :hourly_rate

      t.timestamps
  	end
	end
end
