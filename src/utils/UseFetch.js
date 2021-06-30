import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);

  const getCourses = async () => {
    const response = await fetch(url);
    const courses = await response.json();
    setCourses(courses);
    setIsLoading(false);
    setIsError(false);
  };

  const getProjects = async () => {
    const response = await fetch(url);
    const projects = await response.json();
    setProjects(projects);
    setIsLoading(false);
    setIsError(false);
  };

  useEffect(() => {
    getCourses();
    getProjects();
  }, [url]);
  return { isLoading, courses, isError, projects };
};
