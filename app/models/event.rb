class Event < ApplicationRecord
  belongs_to :contact

  def self.count_records
    self.count
  end
end
