class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    @illustrations = policy_scope(Illustration)
  end

  def home_test
    @illustrations = policy_scope(Illustration)
  end

  def dashboard
  end
end
