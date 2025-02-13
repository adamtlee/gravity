class StaticPagesController < ApplicationController
  allow_unauthenticated_access only: %i[ home ]
  def home
  end

  def dashboard
    @active_contacts = Contact.where(status: 'Active').count
    @inactive_contacts = Contact.where(status: 'Inactive').count
    @deactivated_contacts = Contact.where(status: 'Deactivated').count

    @contact_count = Contact.count_records
    @event_count = Event.count_records
  end
end
