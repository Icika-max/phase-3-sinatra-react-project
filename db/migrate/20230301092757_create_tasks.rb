class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :due_date, null: false
      t.boolean :status, default: false, null: false
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end

    add_index :tasks, [:user_id, :status, :due_date]
  end
end
