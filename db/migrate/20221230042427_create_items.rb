class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :id
      t.integer :user_id
      t.integer :category_id
      t.string :description
      t.integer :list_id

      t.timestamps
    end
  end
end
