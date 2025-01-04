json.extract! event, :id, :date, :location, :summary, :contact_id, :created_at, :updated_at
json.url event_url(event, format: :json)
