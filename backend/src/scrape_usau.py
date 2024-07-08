from usau_scraper import *
import json

# print(json.dumps(getTeamInfo(schoolName='Texas', teamName='TUFF'), indent = 4))

print(json.dumps(getTeamSchedule(schoolName='Texas', teamName='TUFF'), indent = 4))

# print(json.dumps(getTeamRoster(schoolName='Texas', teamName='TUFF'), indent = 4))

# p = json.dumps(getTournamentBracketResults("College", "Men", eventName="Centex", season=2024), indent = 4)

# print(p)