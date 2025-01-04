class CreateEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :events do |t|
      t.date :date
      t.string :location
      t.text :summary
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
