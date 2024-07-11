from usau_modules import *
import sys
import json

tuff = queryTeam({"schoolName": "Texas", "teamName": "TUFF"})
TUFF_URI = list(tuff.values())[0]

def formatLatestTournament(teamURI):
    tournamentURI = getMostRecentTournament(teamURI)["tournament"]["link"]
    tournamentLink = BASE_URL + tournamentURI
    raw = getMostRecentTournament(teamURI)
    for game in raw["tournament"]["games"]:
        game["opponentHref"] = BASE_URL + game["opponentHref"]
    tournament = {
        "tournament": raw["tournament"]["name"],
        "link": tournamentLink,
        "games": raw["tournament"]["games"]
    }

    return tournament


def main():
    try:
        tuff = queryTeam({"schoolName": "Texas", "teamName": "TUFF"})
        TUFF_URI = list(tuff.values())[0]
        
        tournament_data = formatLatestTournament(TUFF_URI)
        print(json.dumps(tournament_data, indent=4))
    except Exception as e:
        print(json.dumps({"error": str(e)}), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()