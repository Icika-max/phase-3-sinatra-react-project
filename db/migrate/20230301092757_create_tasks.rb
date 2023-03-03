class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :due_date
      t.boolean :status 
      t.references :user
      t.timestamps
    end

    add_index :tasks, [:user_id, :status, :due_date]
  end
end
