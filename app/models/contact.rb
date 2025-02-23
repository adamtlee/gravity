require 'csv'
require 'caxlsx'

class Contact < ApplicationRecord
    has_many :events, dependent: :destroy

    def self.to_csv
        attributes = %w{id first_name last_name email phone city state country status}
    
        ::CSV.generate(headers: true) do |csv|
          csv << attributes
    
          all.find_each do |contact|
            csv << attributes.map{ |attr| contact.send(attr) }
          end
        end
      end
    
      def self.to_xlsx
        p = Axlsx::Package.new
        wb = p.workbook
        wb.add_worksheet(name: "Contacts") do |sheet|
          sheet.add_row ["ID", "First Name", "Last Name", "Email", "Phone", "City", "State", "Country", "Status"]
          all.find_each do |contact|
            sheet.add_row [contact.id, contact.first_name, contact.last_name, contact.email, contact.phone, contact.city, contact.state, contact.country, contact.status]
          end
        end
        p.to_stream.read
    end

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
