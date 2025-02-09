class AddStatusToContacts < ActiveRecord::Migration[8.0]
  def change
    add_column :contacts, :status, :string
  end
end
