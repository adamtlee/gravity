class Contact < ApplicationRecord
    has_many :events, dependent: :destroy
    def full_name 
        "#{first_name} #{last_name}" 
    end
end
