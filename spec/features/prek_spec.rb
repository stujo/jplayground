require "spec_helper"

feature "Pre-K", js: true do
  scenario "Pre-K on page load" do
    visit prek_path
    expect(page).to have_css("#prek_email_address[placeholder='Email Address']")
    expect(page).to have_css("#prek_green_thing.jplay_green", text: "I'm Green")
  end
end