class Api::V1::ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token
  
    # GET /api/v1/contacts
    def index
      @contacts = Contact.all
      render json: JSON.pretty_generate(@contacts.as_json)
    end
  
    # GET /api/v1/contacts/:id
    def show
      render json: @contact
    end
  
    # POST /api/v1/contacts
    def create
      @contact = Contact.new(contact_params)
      if @contact.save
        render json: JSON.pretty_generate(@contact.as_json), status: :created, location: api_v1_contact_url(@contact)
      else
        render json: JSON.pretty_generate(@contact.errors.as_json), status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /api/v1/contacts/:id
    def update
      if @contact.update(contact_params)
        render json: @contact
      else
        render json: @contact.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /api/v1/contacts/:id
    def destroy
      @contact.destroy
    end
  
    private
  
    def set_contact
      @contact = Contact.find(params[:id])
    end
  
    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email, :phone, :city, :state, :country, :status)
    end
  end
  