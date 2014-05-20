require "spec_helper"

feature "Undergraduate", js: true do
  scenario "Undergraduate Select Event" do
    visit undergraduate_path

    expect(page).to have_css("div#undergraduate_progress_bar", :count => 1, :text => '60%')
    expect(page).to have_css("select#undergraduate_progress_select", :count => 1)

    # find('#undergraduate_progress_select').find(:xpath, 'option[2]').select_option

    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].each do |perc|
      within '#undergraduate_progress_select' do
        find("option[value='#{perc}']").select_option
      end
      expect(page).to have_css("div#undergraduate_progress_bar", :count => 1, :text => "#{perc}%")
    end
  end
end
