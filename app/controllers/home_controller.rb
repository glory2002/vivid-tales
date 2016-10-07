class HomeController < ApplicationController
  def index
    flash[:notice] = t('hello')
    @contact = Contact.new
  end

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def book
    render layout: 'books'
  end

  def thebook
  end

  def idea
  end

  def autor
  end

  def contacts
      @contact = Contact.new(params[:contact])
      @contact.request = request
      if @contact.deliver
        flash.now[:error] = nil
      else
        flash.now[:error] = 'Съобщението не може да бъде изпратено.'
        render :contacts
      end
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = 'Съобщението не може да бъде изпратено.'
      render :new
    end
    render "contacts/new"

  end
end
