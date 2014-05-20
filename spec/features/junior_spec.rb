require "spec_helper"

feature "Junior", js: true do
  scenario "Junior On Page Load and Button Clicks" do
    visit junior_path

    #Part A
    #Check style applied
    expect(page).to have_css("#junior_show_and_tell.thing_of_interest", text: "I'm Showing", count: 1)

    click_button("junior_show_and_tell")

    #Poltergeist ignores alerts? But how can we test?

    # Check intialized state wasn't hacked :)
    expect(page).to have_css("#junior_green_thing", text: "I'm not Green", count: 1)
    expect(page).to have_css("#junior_green_thing.jplay_green", count: 0)
    click_button("junior_fix_green")
    expect(page).to have_css("#junior_green_thing.jplay_green", count: 1)

    click_button("junior_fix_green_content")
    expect(page).to have_css("#junior_green_thing.jplay_green", text: "I'm now Green", count: 1)

  end
end
