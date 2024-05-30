--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: williams
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO williams;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: rooms; Type: TABLE; Schema: public; Owner: williams
--

CREATE TABLE public.rooms (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    capacity integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.rooms OWNER TO williams;

--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: williams
--

INSERT INTO public.rooms VALUES
	(2, 'Meeting Room B', 8, 2),
	(3, 'Workshop Room C', 20, 1),
	(4, 'Training Room D', 15, 3),
	(5, 'Seminar Room E', 25, 2),
	(6, 'Discussion Room F', 5, 4),
	(7, 'Board Room G', 12, 1),
	(8, 'Conference Room H', 10, 3),
	(9, 'Small Meeting Room I', 4, 2),
	(10, 'Large Conference Room J', 30, 4),
	(11, 'Project Room K', 6, 1),
	(12, 'Collaboration Room L', 10, 3),
	(13, 'Focus Room M', 2, 2),
	(14, 'Presentation Room N', 18, 1),
	(15, 'Lecture Room O', 22, 3),
	(16, 'Briefing Room P', 14, 4),
	(17, 'Strategy Room Q', 10, 1),
	(18, 'Consultation Room R', 5, 3),
	(19, 'Interview Room S', 3, 2),
	(20, 'Brainstorming Room T', 12, 4),
	(1, 'Conference Room A', 10, 1);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: williams
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: williams
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

