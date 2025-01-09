class ChangeLocationToCityStateAndCountryInContacts < ActiveRecord::Migration[8.0]
  def change 
    add_column :contacts, :city, :string 
    add_column :contacts, :state, :string 
    add_column :contacts, :country, :string 
    reversible do 
      |dir| dir.up do 
        Contact.reset_column_information 
        Contact.find_each do |contact| 
          if contact.location.present? 
            # Assuming the location is in the format "City, State, Country" 
            parts = contact.location.split(', ') 
            contact.update_columns(city: parts[0], state: parts[1], country: parts[2]) if parts.size == 3 
          end 
        end 
      end 
    end 
    
    remove_column :contacts, :location, :string 
  end
end
