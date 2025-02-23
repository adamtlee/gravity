class Video < ApplicationRecord
    def self.count_records
        self.count
    end
end
