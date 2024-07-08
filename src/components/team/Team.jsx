import React from "react";
import Heading from "../common/Heading";
import team1 from "../../../public/images/team-1.jpg";
import team2 from "../../../public/images/team-2.jpg";
import team3 from "../../../public/images/team-3.jpg";
import team4 from "../../../public/images/team-4.jpg";
import TeamDetailCard from "./teamCard/TeamDetailCard";
import Container from "../common/Container";

function Team() {
  return (
    <Container>
      <div className="text-center items-center">
        <Heading text="Team" />
      </div>
      <div data-aos="fade-up" className="mt-4 p-4 mx-auto text-center ">
        <p className="text-extra-heading-color ">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-4 mt-8  ">
          <TeamDetailCard
            profilePhoto={team1}
            name="Walter White"
            position="Chief Executive Officer"
            description={
              "Explicabo voluptatem mollitia et repellat qui dolorum quasi"
            }
          />
          <TeamDetailCard
            profilePhoto={team2}
            name={"Sarah Jhonson"}
            position={"Product Manager"}
            description={"Aut maiores voluptates amet et quis praesentium qui"}
          />
          <TeamDetailCard
            profilePhoto={team3}
            name={"William Anderson"}
            position={"CTO"}
            description={
              "Quisquam facilis cum velit laborum corrupti fuga rerum quia"
            }
          />
          <TeamDetailCard
            profilePhoto={team4}
            name={"Amanda Jepson"}
            position={"Accountant"}
            description={"Dolorum tempora officiis odit laborum officiis et "}
          />
        </div>
      </div>
    </Container>
  );
}

export default Team;
