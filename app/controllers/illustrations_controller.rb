class IllustrationsController < ApplicationController
  def new
    @illustration = Illustration.new
    authorize @illustration
  end

  def create
    @illustration = Illustration.new(illustration_params)
    authorize @illustration
    if @illustration.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  private

  def illustration_params
    params.require(:illustration).permit(:image)
  end
end
