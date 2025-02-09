class StaticPagesController < ApplicationController
  def home
    @active_contacts = Contact.where(status: 'Active').count
    @inactive_contacts = Contact.where(status: 'Inactive').count
    @deactivated_contacts = Contact.where(status: 'Deactivated').count

    @contact_count = Contact.count_records
    @event_count = Event.count_records
  end
end
