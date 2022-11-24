import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FirstImg, SecondImg, ThirdImg } from "../../imgs/webp/screen4";
import { GoodPoint, BadPoint } from "../../imgs/webp/screen6";
import {
  RedRiftLogo,
  Alex,
  Cris,
  Dasha,
  Ilona,
  Hanna,
  Katsia,
  Maya,
  Mike,
  Nastia,
  Pasha,
  Veronika,
  Gary,
  Dimitri,
} from "../../imgs/webp/screen7";
import { Partner1, Partner2, Partner4 } from "../../imgs/webp/screen8";
import LinkedIn from "../../imgs/new/linkedin.svg";

const Activities = () => {
  const [activeYear, setActiveYear] = useState(0);
  const [activeTeam, setActiveTeam] = useState("managment");

  const desktop1080Width = true;

  const roadMap = [
    {
      year: "2022",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Start Game Production",
              done: true,
            },
            {
              title: "Seed Raising",
              done: true,
            },
            {
              title: "Release Roadmap",
              done: true,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "Game Ideation",
              done: false,
            },
            {
              title: "Defy Market Study ",
              done: false,
            },
            {
              title: "The Block NFT Gaming Consultation",
              done: true,
            },
            {
              title: "Game Development Team Formation",
              done: false,
            },
            {
              title: "BlockChain Team Formation",
              done: true,
            },
            {
              title: "Marketing Team Formation",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "GDD Release",
              done: true,
            },
            {
              title: "Website Release",
              done: true,
            },
            {
              title: "Community Creation",
              done: true,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "Characters Reveal",
              done: false,
            },
            {
              title: "Marketing Launch",
              done: false,
            },
            {
              title: "Private Sale",
              done: false,
            },
            {
              title: "Token Audit",
              done: false,
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Start Game Production",
              done: false,
            },
            {
              title: "DEX Listing",
              done: false,
            },
            {
              title: "NFT Development",
              done: false,
            },
            {
              title: "Marketing Boost",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "NFT Release",
              done: false,
            },
            {
              title: "NFT Sales",
              done: false,
            },
            {
              title: "DAO Development",
              done: false,
            },
            {
              title: "Game MVP Version Release",
              done: false,
            },
            {
              title: "Ambassador Program Launch",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "Testnet Launch",
              done: false,
            },
            {
              title: "Closed Beta Test Launch",
              done: false,
            },
            {
              title: "DAO: Governance Platform Development",
              done: false,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "DAO Launch",
              done: false,
            },
            {
              title: "Bug Bounty Program Release",
              done: false,
            },
            {
              title: "CEX Listing",
              done: false,
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Cross-Chain Study",
              done: false,
            },
            {
              title: "Partnerships: Whales Welcome stage",
              done: false,
            },
            {
              title: "Community Events Release",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "Mainnet Launch",
              done: false,
            },
            {
              title: "Game Alpha Launch",
              done: false,
            },
            {
              title: "Staking Launch",
              done: false,
            },
            {
              title: "Cross-Chain Development",
              done: false,
            },
          ],
        },
      ],
    },
  ];

  const managment = [
    {
      name: "Mike",
      surname: "Sykora",
      job: (
        <>
          CEO,
          <br />
          Co-founder
        </>
      ),
      photo: Mike,
      nameWidth: "107px",
      link: "https://www.linkedin.com/in/michal-sykora-11378b215/",
    },
    {
      name: "Christiaan van Steenbergen",
      job: "Blockchain CTO,  Co-founder",
      photo: Cris,
      link: "https://www.linkedin.com/in/christiaanvansteenbergen/",
    },
    {
      name: "Gary",
      surname: "Yankovich",
      job: "Chief Product Officer ",
      photo: Gary,
      link: "https://www.linkedin.com/in/gary-yankovich-671811168/",
    },
    {
      name: "Darcy",
      surname: "Maltseva",
      job: "Chief Operating Officer ",
      photo: Dasha,
      link: "https://www.linkedin.com/in/darya-maltseva-34868220a/",
    },
    {
      name: "Katerina",
      surname: "Dziatlova",
      job: "Head of management",
      photo: Katsia,
      link: "https://www.linkedin.com/in/katsia-dziatlova",
    },
  ];

  const marketing = [
    {
      name: "Ilona",
      surname: "Makovetskaya",
      job: "Head of Marketing",
      photo: Ilona,
      link: "",
    },
    {
      name: "Maya",
      surname: "Kostenkova",
      job: "Creative producer",
      photo: Maya,
      link: "https://www.linkedin.com/in/egor-aniferyk-204930219/",
    },
    {
      name: "Hanna",
      surname: "Valasheniuk",
      job: "Creative",
      photo: Hanna,
      link: "https://www.linkedin.com/in/hanna-valasheniuk-928970252/",
    },
    {
      name: "Stacy",
      surname: "Naumenko",
      job: "Head of graphic design",
      photo: Nastia,
      link: "https://www.linkedin.com/in/anastasia-naumenko/",
    },
    {
      name: "Veronica",
      surname: "Yasulevich",
      job: "Graphic Designer",
      photo: Veronika,
      link: "https://www.linkedin.com/in/nikahartmann/",
    },
    {
      name: "Paul",
      surname: "Ivuts",
      job: "Head of 3D arts",
      photo: Pasha,
      link: "https://www.linkedin.com/in/ivuts/",
    },
    {
      name: "Alex",
      surname: "Andriyashko",
      job: "3D artist",
      photo: Alex,
      link: "https://www.linkedin.com/in/alexander-andriyashko-97a298206/",
    },
    {
      name: "Dimitri",
      surname: "Shatsila",
      job: "3D artist",
      photo: Dimitri,
      link: "https://www.linkedin.com/in/dimitri-shatsila-11154711a/",
    },
  ];

  return (
    <Box>
      {desktop1080Width && (
        <Box>
          <Box sx={{ paddingTop: "80px", marginBottom: "200px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                activities
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "48px",
              }}
            >
              <Box
                sx={{
                  width: { lg: "436px", xl: "570px" },
                  height: { lg: "500px", xl: "510px" },
                  background:
                    "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                  marginRight: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={FirstImg} alt="play" width="280px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "28px",
                  }}
                >
                  <Typography
                    fontFamily="Aaaiight"
                    fontSize="32px"
                    lineHeight="32px"
                    color="#FFF"
                  >
                    play different modes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    fontSize="16px"
                    lineHeight="27.2px"
                    color="#FFF"
                    textAlign="center"
                  >
                    Explore classic deathmatch, battle royale,
                    <br />
                    meat grinder, capture the flag, duck hunt,
                    <br />
                    run the labyrinth and become a champ.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: { lg: "436px", xl: "570px" },
                    height: { lg: "240px" },
                    background:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "16px",
                      marginLeft: { lg: "20px", xl: "32px" },
                      width: { lg: "120px", xl: "160px" },
                    }}
                  >
                    <img
                      src={SecondImg}
                      alt="play"
                      style={{ width: "inherit" }}
                    />
                  </Box>
                  <Box>
                    <Box sx={{ maxWidth: { lg: "228px", xl: "330px" } }}>
                      <Typography
                        fontFamily="Aaaiight"
                        fontSize="24px"
                        lineHeight="24px"
                        color="#FFF"
                      >
                        create a Clan
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <Typography
                        fontSize="14px"
                        lineHeight="22.4px"
                        color="#FFF"
                        fontFamily="Inter"
                      >
                        Unite with others to fight
                        <br />
                        more effectively.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: { lg: "436px", xl: "570px" },
                    height: { lg: "240px" },
                    background:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "16px",
                      marginLeft: { lg: "20px", xl: "32px" },
                      width: { lg: "120px", xl: "160px" },
                    }}
                  >
                    <img
                      src={ThirdImg}
                      alt="play"
                      style={{ width: "inherit" }}
                    />
                  </Box>
                  <Box>
                    <Box sx={{ maxWidth: { lg: "228px", xl: "330px" } }}>
                      <Typography
                        fontFamily="Aaaiight"
                        fontSize="24px"
                        lineHeight="33.05px"
                        color="#FFF"
                      >
                        Join weekly & seasonal activities & tournaments
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                        maxWidth: { lg: "260px", xl: "330px" },
                      }}
                    >
                      <Typography
                        fontSize="14px"
                        lineHeight="22.4px"
                        color="#FFF"
                        fontFamily="Inter"
                      >
                        Participate in various quests and missions to receive
                        unique rewards and $CJ tokens.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                release roadmap
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#121212",
                width: "270px",
                borderRadius: "4px",
                display: "flex",
                height: "40px",
                marginX: "auto",
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box
                  sx={{
                    width: "90px",
                    background:
                      index === activeYear
                        ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                        : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveYear(index)}
                >
                  <Typography
                    fontSize="20px"
                    lineHeight="32px"
                    color={index === activeYear ? "#FFF" : "#646464"}
                    fontWeight={index === activeYear ? 600 : 400}
                  >
                    {year.year}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "780px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box sx={{ display: index === activeYear ? "block" : "none" }}>
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(0, 2).map((step, index) => (
                      <Box
                        sx={{
                          width: { lg: 431, xl: 570 },
                          height: { lg: 379, xl: 334 },
                          background: "#242424",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(2, 4).map((step, index) => (
                      <Box
                        sx={{
                          width: { lg: 431, xl: 570 },
                          height: { lg: 379, xl: 334 },
                          background: "#242424",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                Team
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#121212",
                width: "500px",
                borderRadius: "4px",
                display: "flex",
                height: "40px",
                marginX: "auto",
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              <Box
                sx={{
                  width: `${500 / 3}px`,
                  background:
                    activeTeam === "managment"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTeam("managment")}
              >
                <Typography
                  fontSize="20px"
                  lineHeight="32px"
                  color={activeTeam === "managment" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "managment" ? 600 : 400}
                >
                  Managment
                </Typography>
              </Box>
              <Box
                sx={{
                  width: `${500 / 3}px`,
                  background:
                    activeTeam === "game"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTeam("game")}
              >
                <Typography
                  fontSize="20px"
                  lineHeight="32px"
                  color={activeTeam === "game" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "game" ? 600 : 400}
                >
                  Game dev
                </Typography>
              </Box>
              <Box
                sx={{
                  width: `${500 / 3}px`,
                  background:
                    activeTeam === "marketing"
                      ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                      : "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setActiveTeam("marketing")}
              >
                <Typography
                  fontSize="20px"
                  lineHeight="32px"
                  color={activeTeam === "marketing" ? "#FFF" : "#646464"}
                  fontWeight={activeTeam === "marketing" ? 600 : 400}
                >
                  Marketing
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "900px",
                minHeight: "760px",
                margin: "auto",
              }}
            >
              {activeTeam === "managment" && (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      lg: "repeat(auto-fit, minmax(150px,1fr))",
                      xl: "repeat(auto-fit, minmax(200px,1fr))",
                    },
                    gridGap: { lg: "40px 35px", xl: "60px 40px" },
                  }}
                >
                  {managment.map((pers, index) => (
                    <Box>
                      <Box
                        sx={{
                          width: { lg: "150px", xl: "200px" },
                          height: { lg: "166px", xl: "222px" },
                        }}
                      >
                        <img
                          src={pers.photo}
                          alt={`${pers.name} ${pers.surname}`}
                          style={{ width: "inherit", height: "inherit" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "32px",
                          maxWidth: { lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          fontSize="16px"
                          lineHeight="19.2px"
                          color="#FFF"
                        >
                          {pers.name} {pers.surname}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "12px",
                          maxWidth: { lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          lineHeight="22.4px"
                          color="#FFF"
                        >
                          {pers.job}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={LinkedIn} alt="linkedin" />
                        <Typography
                          marginLeft="8px"
                          fontFamily="Inter"
                          fontSize="14px"
                          lineHeight="14px"
                          color="#FFF"
                          fontWeight="500"
                        >
                          LinkedIn
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
              {activeTeam === "game" && (
                <Box>
                  <Box
                    sx={{
                      padding: "48px 60px",
                      border: "1px solid #00FFB7",
                      borderRadius: "4px",
                      width: "555px",
                      margin: "auto",
                    }}
                  >
                    <img src={RedRiftLogo} alt="red-rift logo" width="555px" />
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      lineHeight="22.4px"
                      color="#FFF"
                      textAlign="center"
                    >
                      Game Development partner
                    </Typography>
                  </Box>
                </Box>
              )}
              {activeTeam === "marketing" && (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      lg: "repeat(auto-fit, minmax(150px,1fr))",
                      xl: "repeat(auto-fit, minmax(200px,1fr))",
                    },
                    gridGap: { lg: "40px 35px", xl: "60px 40px" },
                  }}
                >
                  {marketing.map((pers, index) => (
                    <Box>
                      <Box
                        sx={{
                          width: { lg: "150px", xl: "200px" },
                          height: { lg: "166px", xl: "222px" },
                        }}
                      >
                        <img
                          src={pers.photo}
                          alt={`${pers.name} ${pers.surname}`}
                          style={{ width: "inherit", height: "inherit" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "32px",
                          maxWidth: { lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          fontSize="16px"
                          lineHeight="19.2px"
                          color="#FFF"
                        >
                          {pers.name} {pers.surname}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "12px",
                          maxWidth: { lg: "150px", xl: "200px" },
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          lineHeight="22.4px"
                          color="#FFF"
                        >
                          {pers.job}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src={LinkedIn} alt="linkedin" />
                        <Typography
                          marginLeft="8px"
                          fontFamily="Inter"
                          fontSize="14px"
                          lineHeight="14px"
                          color="#FFF"
                          fontWeight="500"
                        >
                          LinkedIn
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ marginTop: "100px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                Our partners
              </Typography>
            </Box>
            <Box
              sx={{
                width: "780px",
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                marginTop: "48px",
              }}
            >
              <Box>
                <img src={Partner1} alt="pay-accept" width="186px" />
              </Box>
              <Box>
                <img src={Partner2} alt="red-rift" width="184px" />
              </Box>
              <Box>
                <img src={Partner4} alt="damnn" width="174px" />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Activities;
