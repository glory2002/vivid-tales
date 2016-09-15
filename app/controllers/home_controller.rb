class HomeController < ApplicationController
  def index
    @contact = Contact.new
  end

  def book
    render layout: 'books'
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
    render "contacts/new"

  end
end
