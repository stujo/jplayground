require "spec_helper"

feature "Senior", js: true do
  scenario "Senior button clicks" do
    visit senior_path

    expect(page).to have_css("#senior_visual_thing", :visible => false, :count => 1)

    expect(page).to have_css("#senior_fading_thing", :visible => false, :count => 1)

    expect(page).to have_css("#senior_sliding_thing", :visible => false, :count => 1)

    click_button("senior_toggle")
    expect(page).to have_css("#senior_visual_thing", :count => 1)
    click_button("senior_toggle")
    expect(page).to have_css("#senior_visual_thing", :visible => false, :count => 1)
    expect(page).to have_css("#senior_visual_thing", :count => 0)

    click_button("senior_fade_in")
    expect(page).to have_css("#senior_fading_thing", :count => 1)
    click_button("senior_fade_out")
    expect(page).to have_css("#senior_fading_thing", :visible => false, :count => 1)
    expect(page).to have_css("#senior_fading_thing", :count => 0)

    click_button("senior_slide_toggle")
    expect(page).to have_css("#senior_sliding_thing", :count => 1)
    click_button("senior_slide_toggle")
    expect(page).to have_css("#senior_sliding_thing", :count => 0)
    expect(page).to have_css("#senior_sliding_thing", :visible => false, :count => 1)

  end
end
