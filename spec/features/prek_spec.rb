require "spec_helper"

feature "Pre-K", js: true do
  scenario "on page load" do
    visit prek_path
    # save_screenshot('/tmp/prek.png')
    # expect(page).to have_text("Widget was successfully created.")
  end
end