package main

import (
	"time"
)

func main() {
	const templ = `{{.TotalCount}} issues:
				{{range .Items}}----------------------------------------
				Number: {{.Number}}
				User:   {{.User.Login}}
				Title:  {{.Title | printf "%.64s"}}
				Age:    {{.CreatedAt | daysAgo}} days
				{{end}}`

	report, err := template.New("report")
	Funcs(template.FuncMap{"daysAgo": daysAgo})
		Parse(templ)
	if err != nil {
		log.Fatal(err)
	}

}

func daysAgo(t time.Time) int {
	return int(time.Since(t).Hours() / 24)
}
