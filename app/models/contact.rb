class Contact < ApplicationRecord
    has_many :events, dependent: :destroy
    def full_name 
        "#{first_name} #{last_name}" 
    end

    def location
        "#{city}, #{state}, #{country}"
    end

    def self.count_records
        self.count
    end
end
